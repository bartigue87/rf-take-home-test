import Header from "../components/Header";
import MainContent from "../components/MainContent";
import Sidebars from "../components/Sidebars";

export default function AttendeesPage() {
  return (
    <div className="page--container">
      <Sidebars />
      <div className="header--main--container">
        <Header />
        <MainContent />
      </div>
    </div>
  );
}
