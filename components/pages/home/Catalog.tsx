import { BasicInput } from "@/components/basic/BasicInput";
import { BlockPointTitle } from "@/components/basic/BlockPointTitle";
import { ContactButton } from "@/components/basic/ContactButton";
import { SearchInput } from "@/components/basic/SearchInput";
import { SectionHeadline } from "@/components/basic/SectionHeadline";
import { MainModalForm } from "@/components/big/MainModalForm";
import { ModalWindow } from "@/components/big/ModalWindow";
import {
  isMainModalFormOpen,
  isMainModalFormProcedurePreset,
} from "@/Jotay/atoms";
import classNames from "classnames";
import { useAtom } from "jotai";
import { useState } from "react";

interface ServiceData {
  additionalInfo?: string;
  price: number;
}

interface ServiceItem {
  name: string;
  data: ServiceData[];
}

interface CatalogItemProps {
  items: ServiceItem[];
  onClick: (procedureName: string) => void;
}

type Positions = ServiceItem[][];

const positions: Positions = [
  [
    {
      name: "Вакуумно-роликовый массаж",
      data: [{ additionalInfo: "45 мин.", price: 1300 }],
    },
  ],
  [
    {
      name: "LPG массаж",
      data: [{ additionalInfo: "45 мин.", price: 1500 }],
    },
  ],
  [
    {
      name: "VelaShape массаж",
      data: [{ additionalInfo: "40 мин.", price: 1700 }],
    },
  ],
  [
    {
      name: "Эндосфера массаж",
      data: [
        { additionalInfo: "45 мин.", price: 1700 },
        { additionalInfo: "60 мин.", price: 1900 },
      ],
    },
  ],
  [
    {
      name: "EMSculpt (электромагнитная стимуляция мышц)",
      data: [{ additionalInfo: "30 мин.", price: 1300 }],
    },
  ],
  [
    {
      name: "Кавитация",
      data: [{ additionalInfo: "30 мин.", price: 900 }],
    },
  ],
  [
    {
      name: "Прессотерапия",
      data: [{ additionalInfo: "30 мин.", price: 700 }],
    },
    {
      name: "Костюм для прессотерапии (на весь курс)",
      data: [{ price: 200 }],
    },
  ],

  [
    {
      name: "Вакуумный RF-лифтинг",
      data: [
        { additionalInfo: "20 мин. (1 зона)", price: 900 },
        { additionalInfo: "40 мин. (2 зона)", price: 1300 },
      ],
    },
  ],
];

const CatalogItem = ({ items, onClick }: CatalogItemProps) => {
  return (
    <div
      className={classNames(
        "rounded-base_border_radius bg-main_white box-border p-4",
        "flex flex-col gap-5 lg:gap-3",
        "text-base font-normal cursor-pointer",
        "hover:bg-main_black/5 active:bg-main_black/5"
      )}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onClick(items[0].name);
      }}
    >
      {items.map((item, index) => (
        <div
          key={index}
          className="flex flex-col lg:flex-row gap-3 items-start justify-between"
        >
          <div>
            <BlockPointTitle text={item.name} />
          </div>

          <div className="flex flex-col gap-3 ml-auto lg:ml-[unset]">
            {item.data.map((itemData, index) => (
              <div
                className={classNames(
                  "rounded-base_border_radius bg-secondary ml-auto",
                  itemData.additionalInfo && "pl-6 flex items-center gap-2"
                )}
                key={index}
              >
                {itemData.additionalInfo}
                <div className="text-lg px-4 bg-main_aqua pt-[9px] pb-[7px] rounded-base_border_radius text-main_white">
                  {itemData.price} ₽
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export const Catalog = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const [, setIsActive] = useAtom(isMainModalFormOpen);
  const [, setInitialProcedure] = useAtom(isMainModalFormProcedurePreset);

  const filteredPositions = positions.filter((positionGroup) =>
    positionGroup.some((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const handlePresetModalOpen = (procedureName: string) => {
    setIsActive(true);
    setInitialProcedure(procedureName);
  };
  return (
    <section className="flex flex-col gap-6">
      <div className="text-center font-normal flex flex-col gap-1">
        <SectionHeadline text="Каталог и цены" />
        <div className="text-sm">Нажмите на процедуру для записи</div>
      </div>
      <SearchInput
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <section
        className={classNames(
          "rounded-base_border_radius bg-secondary box-border p-6 mx-auto",
          "flex flex-col gap-4",
          "max-w-[800px] w-full"
        )}
      >
        {filteredPositions.length > 0 ? (
          filteredPositions.map((position, index) => (
            <CatalogItem
              key={index}
              items={position}
              onClick={(procedureName: string) =>
                handlePresetModalOpen(procedureName)
              }
            />
          ))
        ) : (
          <div className="text-center text-base">Ничего не найдено</div>
        )}
      </section>
    </section>
  );
};
