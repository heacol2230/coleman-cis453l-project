import Button from "../components/Button";
import TrackOption from "../components/TrackOption";
import Navbar from "../layout/Navbar";

export default function UserHomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="py-8">
        <div className="flex flex-col items-center">
          <div className="text-white text-center text-[24px]">
            <p>Welcome back Heather! It looks</p>
            <p>like we have some work to do.!!</p>
            <p>Let's get started on these urgent</p>
            <p>
              tasks to get your{" "}
              <span className="font-bold text-[28px] italic">Sick</span>
            </p>
            <p className="font-bold text-[28px]">beats noticed!</p>
          </div>

          <div className="mt-8">
            <TrackOption text={`Upload your first track to Youtube`} id="uploadYoutube" />

            <TrackOption text={`Upload your first track to Instagram`} id="uploadInstagram" />

            <TrackOption text={`Upload your first track to Facebook`} id="uploadFacebook" />

            <TrackOption text={`Be sure to include relevant and popular words in your title and description.`} id="includeWords" />

            <TrackOption text={`Include Subscribe link in beginning - drawing fans to subscribe to your media channels`} id="includeSubscribe" />

            <TrackOption text={`Respond immediately to any and all comments. You can even ask some friends to make comments to get started.`} id="respondComments" />
          </div>

          <div className="mt-8">
            <Button text={`Completed All Tasks`}/>
          </div>
        </div>
      </div>
    </div>
  );
}
