import Carousel from "../common/Carousel";
import StoreLinks, { BtnTypes } from "../common/StoreLinks";

function Reviews() {
  const slides = [
    {
      src: "https://previews.dropbox.com/p/thumb/ACnxh7hCE--4bXKDcIPR0QowDnKttgl-X19V9iBPGFP7MCqGwUrYQTlon0JC_CRRV__dkR9yhdLCt8oiO4yS__VxcPCYs4HGgbSB1woalfqy99h6W11j4XEwCGLQyIKwMuHsqqaon1KrHG2Cnv0TUM0UaZqH5-2tLBK2giaFWaBL4_7djrPct48CfbbdL22jD6vWxHBqVtdqG3gApcUj7pUzop951bWfmUnGS8eTyWsO0xfABeQP7YG3CHv5wrvl-dVzHJaGB81iqUweaRd8XJ53wvQfFp-x7-0BCIRY_c_BA4rlm2vZEcVQi3eojgvEOhYT3XW5K2YPQxMujK08vd9e/p.jpeg",
      text: '"Whether you re posting a photo of your morning coffee or showcasing your latest vacation adventures, Henstack offers a vibrant community where creativity thrives."',
      name: "Emmanuel Ita Mkpa",
      country: "Nigerian",
    },
  ];
  return (
    <section
      id="reviews"
      className="flex max-w-7xl flex-col items-center justify-between px-8 py-20 lg:m-auto lg:flex-row lg:px-12"
    >
      <article className="mb-10 flex flex-col items-center justify-center lg:w-1/2 lg:items-start">
        <h2 className="mb-4 max-w-[16ch] text-center text-4xl font-semibold text-gray-800 lg:w-full lg:text-left">
          Join thousands of others thriving with Henstack
        </h2>
        <StoreLinks type={BtnTypes.Standard} />
      </article>
      <Carousel slides={slides} />
    </section>
  );
}

export default Reviews;
