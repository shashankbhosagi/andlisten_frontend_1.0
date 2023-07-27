import SideBarComponent from "../components/shared/SideBar";
import NavBar from "../components/shared/NavBar";
const HomeComponent = () => {
  return (
    <>
      <div className="h-full w-full flex">
        <SideBarComponent />
        {/* //TODO: Remove that inline css(background) euu!!!! */}
        <div className="h-full w-4/5" style={{ background: `#121212` }}>
          <NavBar />
          <div className="content"></div>
        </div>
      </div>
    </>
  );
};

export default HomeComponent;
