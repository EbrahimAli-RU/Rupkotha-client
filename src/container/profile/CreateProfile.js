import { useDispatch, useSelector } from "react-redux";
import AuthInput from "../../component/authInput/AuthInput";
import { withRouter } from "react-router-dom";
import Profile from "../../component/profileTitle/Profile";
import * as action from "../../redux/action/index";
import Navigation from "../../layout/Navigation";
import { Link } from "react-router-dom";
import Button from "../../component/button/Button";

const CreateProfile = (props) => {
  const dispatch = useDispatch();

  //////GETING PROFILE DATA FROM REDUX
  const profileState = useSelector((state) => state.profile);

  ////HANDLING USER INPUT FOR NAME, AGE AND LANGUAGE
  const userInputHandler = (e) => {
    const { name, value } = e.target;
    dispatch(action.userInputHandler(name, value));
  };

  /////CHECK IF USER RELOAD A PAGE IF RELOAD THEN REDIRECT TO /profie/new
  if (profileState.child.photo === "") {
    props.history.push("/profile/new");
  }
  const handler = (id) => {};
  const continueHandler = () => {
    if (
      profileState.child.name.length !== 0 ||
      profileState.child.age.length !== 0 ||
      profileState.child.language.length !== 0
    ) {
      props.history.push("/profile/interest");
    }
  };

  /////////////////////RENDERING/////////////////
  return (
    <>
      <Navigation />
      <div className="create__profile__wrapper">
        <div className="create__profile__content">
          <h2>Create Profile</h2>
          <Profile
            profile={profileState.child.photo}
            isDisplay={false}
            handler={handler}
          />
          <AuthInput
            placeholder="Name"
            name="name"
            type="text"
            handler={userInputHandler}
            valueof={profileState.child.name}
          />
          <AuthInput
            placeholder="Age"
            name="age"
            type="number"
            handler={userInputHandler}
            valueof={profileState.child.age}
          />
          <AuthInput
            placeholder="Language"
            name="language"
            type="text"
            handler={userInputHandler}
            valueof={profileState.child.language}
          />
          <Button
            text="Continue"
            handler={continueHandler}
            isDisable={
              profileState.child.name.length === 0 ||
              profileState.child.age.length === 0 ||
              profileState.child.language.length === 0
                ? true
                : false
            }
          />
          <Link className="cancel__button display" to="/profile/new">
            Cancel
          </Link>
        </div>
      </div>
    </>
  );
};

export default withRouter(CreateProfile);
