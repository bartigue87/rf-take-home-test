import Header from "../components/Header";
import MainContent from "../components/MainContent";
import Navbars from "../components/Navbars";

export default function AttendeesPage() {
  return (
    <div className="page--container">
      <Navbars />
      <div className="header--main--container">
        <Header />
        <MainContent />
      </div>
    </div>
  );
}
