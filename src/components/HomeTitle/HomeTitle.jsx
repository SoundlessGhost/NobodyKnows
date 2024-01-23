/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import img from "../../assets/icons/robot.jpg";
// import boy from "../../assets/images/boy.png";
import "./HomeTitle.css";
const HomeTitle = () => {
  return (
    <div className="HomeContainer">
      <div>
        <p>
          Every One <br />
          Leaves One Day <br /> But I Hope <br />
          <span>You Will Stay Forever </span>
        </p>
        <h6>
          Don't Trust Me , Even If I Like You A Lot. I Can Still Ignore Your
          Whole Existence. <br />
          No Friend's , No GirlFriend , Not HandSome , Not Stylish , Not Rich
          That's The Boy I'm 🙃.
          <br />
          <br />
          Your Fortune Is In Prayer But In The Prayers Of Others. One Day A Man
          Went To Him And Said, I Am In A Lot Of Trouble. He Said The Solution
          Is Simple, Find A Man Who Will Pray For You But On The Condition That
          You Don't Ask Him To Pray For You. Pray For You Just By Seeing You. So
          Do Something For Someone To Pray For You.
        </h6>
        <button className="button">Get Start</button>
        <button className="button">Login</button>
      </div>
      <div>
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default HomeTitle;
