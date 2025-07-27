import CarouselCustom from "./CarouselCustom";

export default function TabPanel({ headers, content, curr, setCurr }) {
  return (
    <div className="w-full mt-4 flex-col justify-center items-center text-center">
      {headers}
      <div className="w-full">
        <CarouselCustom autoSlide={false} curr={curr} setCurr={setCurr}>
          {content}
        </CarouselCustom>
      </div>
    </div>
  );
}
