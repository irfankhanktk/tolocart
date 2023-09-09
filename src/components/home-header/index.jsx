import { Link } from "react-router-dom";

export default function HomeHeader({ onClickSeeMore, title, seeMore }) {
  return (
    <div className="mx-3 d-flex justify-content-between align-items-center home-bg">
      <span className="font-size-heavy">{title}</span>
      <span className="text-center">
        {seeMore && (
          <Link
            to="#"
            className="show-all"
            onClick={(e) => {
              e.preventDefault();
              onClickSeeMore();
            }}
          >
            Show all <i class="fa fa-angle-right" aria-hidden="true"></i>
          </Link>
        )}
      </span>
    </div>
  );
}
