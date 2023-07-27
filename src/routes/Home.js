import SideBarComponent from "../components/shared/SideBar";
import NavBar from "../components/shared/NavBar";
import PlaylistView from "../components/shared/PlayListView";

const Songs = [
  {
    title: "Pink Venom",
    description:
      "This that pink venom this that pink venom taste that pink venom ",
    srcImg:
      "https://upload.wikimedia.org/wikipedia/en/c/cb/Pink_Venom_Cover.jpg",
  },
  {
    title: "Vampire",
    description:
      "Bloodsucker, Famefucker bleedin' me dry, like a goddamn vampire",
    srcImg:
      "https://upload.wikimedia.org/wikipedia/en/1/14/Olivia_Rodrigo_-_Vampire.png",
  },
  {
    title: "A Lovely Night",
    description:
      "Some other girl and guy would love the swirling sky but there's only you and I ",
    srcImg: "https://i.ibb.co/yycnHjj/lala-land.jpg",
  },
  {
    title: "Pink Venom",
    description:
      "This that pink venom this that pink venom taste that pink venom ",
    srcImg:
      "https://upload.wikimedia.org/wikipedia/en/c/cb/Pink_Venom_Cover.jpg",
  },
  {
    title: "Vampire",
    description:
      "Bloodsucker, Famefucker bleedin' me dry, like a goddamn vampire",
    srcImg:
      "https://upload.wikimedia.org/wikipedia/en/1/14/Olivia_Rodrigo_-_Vampire.png",
  },
];

const HomeComponent = () => {
  return (
    <>
      <div className="h-full w-full flex">
        <SideBarComponent />
        {/* //TODO: Remove that inline css(background) euu!!!! */}
        <div
          className="h-full w-4/5 overflow-auto"
          style={{ background: `#121212` }}
        >
          <NavBar />
          <div className="content p-8 pt-0 overflow-auto">
            <PlaylistView titleText="Songs" cardsData={Songs} />
            <PlaylistView titleText="Study" cardsData={Songs} />
            <PlaylistView titleText="Pop" cardsData={Songs} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeComponent;
