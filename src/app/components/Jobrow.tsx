import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function JobRow() {
  return (
    <>
      <div className="bg-white p-4 rounded-md shadow-sm flex gap-4 relative">
        <div className="absolute top-2 right-4">
          <i className="fa-regular fa-heart"></i>
        </div>
        <div className="content-center ">
          <img
            className="size-12"
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Green.png"
            alt="logo"
          />
        </div>
        <div className="grow">
          <div className="text-gray-500 text-sm">Spotify</div>
          <div className="font-bold mb-1">Software Developer</div>
          <div className="text-gray-500 text-sm">
            Remote &middot; New York, Us &middot; Full-time
          </div>
        </div>
        <div className="content-end text-gray-500 text-sm">2 weeks ago</div>
      </div>
    </>
  );
}
