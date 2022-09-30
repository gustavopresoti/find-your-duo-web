import * as Select from '@radix-ui/react-select';

import { Game } from '../App';
import { useState } from 'react';

import { CaretDown, CaretUp } from 'phosphor-react';

interface Props {
  name: string;
  games: Game[];
}

export function DropDownList({ name, games }: Props) {
  const [value, setValue] = useState("");
  
  return(
    <Select.Root name={name} onValueChange={setValue}>
      { !value
          ? <Select.Trigger className="bg-zinc-900 py-3 px-4 flex justify-between items-center rounded text-sm text-zinc-500">
              <Select.Value placeholder="Selecione o game que deseja jogar" />
              <Select.Icon className="text-zinc-400">
                <CaretDown size={24} />
              </Select.Icon>
            </Select.Trigger>
          : <Select.Trigger className="bg-zinc-900 py-3 px-4 flex justify-between items-center rounded text-sm text-white">
              <Select.Value placeholder="Selecione o game que deseja jogar" />
              <Select.Icon className="text-zinc-400">
                <CaretDown size={24} />
              </Select.Icon>
            </Select.Trigger>
      }
      <Select.Portal>
        <Select.Content className='bg-zinc-900 mt-10 py-2 w-full rounded shadow-xl overflow-hidden'>
          <Select.ScrollUpButton>
            <CaretUp />
          </Select.ScrollUpButton>
          <Select.Viewport className='flex flex-col absolute'>
            { games.map((game) => {
                return (
                  <Select.Item key={game.id} value={game.id} className='text-white flex items-center py-2 px-9 text-sm h-8 relative select-none hover:bg-violet-500'>
                    <Select.ItemText>{game.title}</Select.ItemText>
                  </Select.Item>
                );
            }) }
          </Select.Viewport>
          <Select.ScrollDownButton>
            <CaretDown />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}