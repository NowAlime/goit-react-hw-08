import { Helmet } from 'react-helmet';

const TitleBar = ({ children }) => {
  return (
    <Helmet>
      <title>{children}</title>
    </Helmet>
  );
};

export default TitleBar;
