import CircleBtn from "../components/CirlceBtn";
import Btn from "../components/Btn";
import { Star, ThankYou } from "./icons";
import { useAtomValue } from "jotai";
import { modalAtom, rateAtom } from "./store";
function App() {
  const isShow = useAtomValue(modalAtom);
  const [rate] = useAtomValue(rateAtom);

  const content = isShow ? (
    <>
      <div className="mx-auto sm:scale-125">
        <ThankYou />
      </div>
      <p className="text-number text-primary py-2 px-4 bg-card-fill brightness-125 w-fit mx-auto rounded-full">{`You selected ${rate} out of 5`}</p>
      <h1 className="text-title font-bold text-white text-center">
        Thank you!
      </h1>
      <p className="text-body text-text-base text-center">
        {" "}
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </>
  ) : (
    <>
      <div className="w-10 h-10 sm:w-[50px] sm:h-[50px] sm:[&_>_svg]:scale-125 bg-card-fill brightness-125 rounded-full grid place-items-center">
        <Star />
      </div>
      <h1 className="text-title font-bold text-white">How did we do?</h1>
      <p className="text-body text-text-base">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <ul className="flex justify-between">
        {[1, 2, 3, 4, 5].map((num, idx) => (
          <CircleBtn key={idx} title={`${num}`}>
            {num}
          </CircleBtn>
        ))}
      </ul>
      <Btn />
    </>
  );
  return <main className="w-full grid gap-5 sm:gap-[30px]">{content}</main>;
}

export default App;
