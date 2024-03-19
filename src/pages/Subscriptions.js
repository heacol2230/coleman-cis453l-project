import FrameTrackerIcon from "../assets/FrameTracker.svg";
import Button from "../components/Button";
import SubscriptionOption from "../components/SubscriptionOption";
import Navbar from "../layout/Navbar";

export default function Subscriptions() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center">
        <img src={FrameTrackerIcon} alt="" />

        <div>
          <div className="rounded-xl px-3.5 py-2.5 border-[2px] border-[#E76405] my-4">
            <SubscriptionOption
              title={`Monthly`}
              content={`$29.99 / mo (359.88/yr) Monthly payments`}
            />
          </div>

          <div className="rounded-xl px-3.5 py-2.5 border-[2px] border-[#E76405] my-4">
            <SubscriptionOption
              title={`Annual`}
              content={`$300.00 / yr one time payment *This option is 25/mo saving you $59.88`}
            />
          </div>

          <div className="rounded-xl px-3.5 py-2.5 border-[2px] border-[#E76405] my-4">
            <SubscriptionOption content={`1 - 30 min session @ $35.00`} />
            <SubscriptionOption content={`1 - 60 min session @ $45.00`} />
            <SubscriptionOption content={`6 - 30 min session @ $185.00`} />
            <SubscriptionOption content={`6 - 60 min session @ $220.00`} />

            <SubscriptionOption
              title={`***STARTERS BUNDLE PROMO***`}
              content={`2 - 30 min sessions $ 1 - 60min session`}
              subTitle={`SPECIAL PROMO TOTAL $85.00 ($30.00 savings)`}
            />
          </div>
        </div>

        <div className="mt-8">
          <Button text={`Send code for MFA`} />
        </div>
      </div>
    </div>
  );
}
