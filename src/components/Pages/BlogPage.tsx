import ChipJourney from "../MainSections/Blogs/ChipJourney";
import MainHeader from "../MainSections/Blogs/MainHeader";
import MainSections from "../MainSections/Blogs/MainSections";
import SetsAppart from "../MainSections/Blogs/SetsAppart";

export default function BlogPage() {
  return (
    <main className="mt-[58px] md:mt-[104px] text-center flex flex-col items-center max-w-7xl md:max-w-full mx-auto px-4">
      <MainHeader />
      <SetsAppart />
      <ChipJourney />
      <MainSections />
    </main>
  );
}
