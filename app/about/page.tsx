import { title } from "@/components/primitives";

export default function AboutPage() {
  return (
    <div>
      <h1 className={title()}>About</h1>
      <img src="/saisha.jpg" alt="Saisha" width={300} height={300}></img>
      <img src="" alt="Italian Trulli" width={300} height={300}></img>
      <img src="" alt="Italian Trulli" width={300} height={300}></img>

      <img src="https://pbs.twimg.com/media/FU17s0TX0AkKn7J.jpg" alt="Dance" width={300} height={300}></img>
      <img src="https://i.pinimg.com/474x/b4/29/bd/b429bdd9331b56226dd8903ffe9073e6.jpg" alt="Taekwondo" width={300} height={300}></img>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhJSLeRYwQGe_hW6KqyXyhm1B_4JW9UwSdlg&s" alt="Reading" width={300} height={300}></img>

      <a href="https://open.spotify.com/?scrlybrkr=095c600f">Link to Spotify</a>
      <a href="https://www.pinterest.com/">Link to Pinterest</a>
      <a className="bg-lime-500 m-3 p-3" href="https://www.chess.com/" target="_blank">Chess.com</a>

    <Button href="google.com">Google</Button>

    </div>
  );
}
