import "./Content.css";

const Content = () => {
  return (
    <>
      <div className="container mt-4">
        <div>
          <h2 className="content-h2 mb-3">Welcome to The Creators </h2>
          <p className="content-p" align="justify">
            Creator's is an emerging company which provides an opportunity to
            increase the productivity of production process. With expert in the
            field of manufacturing Industrial products we are reaching out to
            tier 1 tier 2 and tier 3 cities across India where the biggest
            markets are waiting to be served.
          </p>
          <p className="content-p" align="justify">
            Creator's value proposition helps you increase your productivity
            &amp; strives hard to deliver its products across India wherever
            there is an assured market. As a young &amp; dynamic organization,
            we have passionately thrived hard to service &amp; deliver end to
            end product line pan India with both quality and quantity to the
            utmost satisfaction of our valued patrons.
          </p>
        </div>

        <div className="set-more">
          <a href="profile.html" className="more-btn">
            Read More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
              />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};

export default Content;
