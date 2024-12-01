import { FC, useRef, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import ListItem from "./ListItem";
import { categoriesData } from "../dummyData";

interface ListProps {}

const List: FC<ListProps> = ({}) => {
  const [slideNumber, setSlideNumber] = useState<number>(0);

  const listRef = useRef<HTMLInputElement>(null);

  const handleClick = (direction: string) => {
    let distance = listRef.current!.getBoundingClientRect().x - 50; // 50 comes from 'margin-left', ml-12.5

    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current!.style.transform = `translateX(${240 + distance}px)`;
    }

    if (direction === "right" && slideNumber < 3) {
      setSlideNumber(slideNumber + 1);
      listRef.current!.style.transform = `translateX(${-240 + distance}px)`;
    }
  };

  return (
    <div className="py-10">
      <h1 className="ml-12.5 font-bold text-xl">Categories</h1>

      <div className="relative overflow-hidden py-10">
        <MdChevronLeft
          className={`absolute top-0 bottom-0 m-auto left-0 cursor-pointer z-10 ${
            slideNumber === 0 && "hidden"
          }`}
          color="red"
          size={40}
          onClick={() => handleClick("left")}
        />
        <div
          className="flex w-max ml-12.5 transition duration-400 ease-in"
          ref={listRef}
        >
          {categoriesData.map((element, index) => (
            <ListItem category={element} key={index} />
          ))}
        </div>
        <MdChevronRight
          className="absolute top-0 bottom-0 m-auto right-0 cursor-pointer"
          color="red"
          size={40}
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
};

export default List;
