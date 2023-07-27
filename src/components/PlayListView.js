import Card from "./shared/Card";

const PlaylistView = ({ titleText, cardsData }) => {
  return (
    <div className="text-white mt-8">
      <div className="text-2xl font-semibold mb-5">{titleText}</div>
      <div className="w-full flex items-center justify-between space-x-4">
        {
          //Cards data will be an array
          cardsData.map((item) => {
            return (
              <Card
                title={item.title}
                description={item.description}
                srcImg={item.srcImg}
              />
            );
          })
        }
        {/* <Card
            title="Pink Venom"
            description={
              "This that pink venom this that pink venom taste that pink venom "
            }
            srcImg="https://upload.wikimedia.org/wikipedia/en/c/cb/Pink_Venom_Cover.jpg"
          />
          <Card
            title="Vampire"
            description={
              "Bloodsucker, Famefucker bleedin' me dry, like a goddamn vampire"
            }
            srcImg="https://upload.wikimedia.org/wikipedia/en/1/14/Olivia_Rodrigo_-_Vampire.png"
          />
          <Card
            title="A Lovely Night"
            description={
              "Some other girl and guy would love the swirling sky but there's only you and I "
            }
            srcImg="https://i.ibb.co/yycnHjj/lala-land.jpg"
          />
          <Card
            title="Pink Venom"
            description={
              "This that pink venom this that pink venom taste that pink venom "
            }
            srcImg="https://upload.wikimedia.org/wikipedia/en/c/cb/Pink_Venom_Cover.jpg"
          />
          <Card
            title="Vampire"
            description={
              "Bloodsucker, Famefucker bleedin' me dry, like a goddamn vampire"
            }
            srcImg="https://upload.wikimedia.org/wikipedia/en/1/14/Olivia_Rodrigo_-_Vampire.png"
          /> */}
      </div>
    </div>
  );
};

export default PlaylistView;
