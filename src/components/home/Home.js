import { Container, Section, Layout } from "./Home.styled";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

import LeftSide from "./LeftSide";
import MainSide from "./MainSide";
import RigthSide from "./RightSide";

const Home = (props) => {
  return (
    <Container>
      {!props.user && <Navigate to="/" />}
      <Section>
        <h5>
          <a>Hiring in hurry? - </a>
        </h5>
        <p>
          Find talented pros in record time with Upwork and keep business
          moving.
        </p>
      </Section>
      <Layout>
        <LeftSide />
        <MainSide />
        <RigthSide />
      </Layout>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  // signIn: () => dispatch(signInApi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
