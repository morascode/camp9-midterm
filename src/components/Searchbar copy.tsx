import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

  return (
    <Combobox value={query} onChange={setQuery}>
      <div className="w-[20.938rem] h-[3rem]">
        <div className="sbar bg-[#363740] w-[20.938rem] h-[3rem] rounded-full flex items-center">
          <div className="sbar__icon border-solid py-[0.938rem] pl-[1.438rem] pr-[1.188rem]">
            <MagnifyingGlassIcon
              className="icon text-[#86878c] "
              style={{
                width: '18px',
              }}
            />
          </div>
          <Combobox.Input
            className="sbar__input bg-transparent mr-[1.438rem] flex-1 outline-0 text-[#9ca3af]"
            onChange={event => setQuery(event.target.value)}
            placeholder="Search"
          />
        </div>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery('')}
        >
          <Combobox.Options className="absolute mt-1 max-h-60 w-[20.938rem] overflow-auto rounded-md bg-[#363740] py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredData?.length === 0 && query !== '' ? (
              <div className="relative cursor-default select-none py-2 px-4 text-[#9ca3af]">
                Nothing found.
              </div>
            ) : (
              filteredData?.map(movie => (
                <Combobox.Option
                  key={movie.id}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-[#FFB43A] text-[363740]' : 'text-[#9ca3af]'
                    }`
                  }
                  value={movie}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {movie.title}
                      </span>
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                            active ? 'text-white' : 'text-yellow'
                          }`}
                        >
                          <CheckIcon className="h-5 w-5 " aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  );

