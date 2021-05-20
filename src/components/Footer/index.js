import { lazy, Fragment } from "react";
import { Row, Col } from "antd";
import i18n from "i18next";
import { withTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";

import * as S from "./styles";

const SvgIcon = lazy(() => import("../../common/SvgIcon"));
const Container = lazy(() => import("../../common/Container"));

const Footer = ({ t }) => {
  const handleChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth"
    });
  };
  const SocialLink = ({ href, src }) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <Fragment>
      <Fade bottom>
        <S.Footer>
          <Container>
            <Row type="flex" justify="space-between">
              <Col lg={10} md={10} sm={12} xs={24}>
                <S.Language>{t("Contact")}</S.Language>
                <S.Para>
                  {t(
                    `Do you have any question regarding the project? Feel free to reach out.`
                  )}
                </S.Para>
              </Col>
              {/*<Col lg={8} md={8} sm={12} xs={24}>
                <S.Title>{t("Policy")}</S.Title>
                <S.Large to="/" left="true">
                  {t("Application Security")}
                </S.Large>
                <S.Large left="true" to="/">
                  {t("Software Principles")}
                </S.Large>
              </Col>*/}
              <Col lg={6} md={6} sm={12} xs={24}>
                <S.Empty />
                <S.Large left="true" onClick={() => scrollTo("contact")}>
                  {t("Customer Support")}
                </S.Large>
              </Col>
            </Row>
            <Row type="flex" justify="space-between">
              <Col lg={10} md={10} sm={12} xs={24}>
                <S.Empty />
                <S.Language>{t("ADDRESS")}</S.Language>
                <S.Para>Ambedkar Nagar C.H.S</S.Para>
                <S.Para>Worli, Mumbai</S.Para>
                <S.Para>India</S.Para>
              </Col>
              <Col lg={8} md={8} sm={12} xs={24}>
                <S.Title>{t("Company")}</S.Title>
                <S.Large left="true" onClick={() => scrollTo("contact")}>
                  {t("About")}
                </S.Large>
              </Col>
              <Col lg={6} md={6} sm={12} xs={24}>
                <S.Select>
                  <S.Label htmlFor="select-lang">{t("Language")}</S.Label>
                  <S.LangSelect
                    onChange={handleChange}
                    value={i18n.language}
                    id="select-lang"
                  >
                    <option value="en">English</option>
                    <option value="es">Español</option>
                  </S.LangSelect>
                </S.Select>
              </Col>
            </Row>
          </Container>
        </S.Footer>
        <S.Extra>
          <Container border="true">
            <Row
              type="flex"
              justify="space-between"
              align="middle"
              style={{ paddingTop: "3rem" }}
            >
              <S.NavLink to="/">
                <S.LogoContainer>
                  <SvgIcon
                    src="logo.svg"
                    aria-label="homepage"
                    width="101px"
                    height="64px"
                  />
                </S.LogoContainer>
              </S.NavLink>
              <S.FooterContainer>
                <SocialLink
                  href="https://github.com/shravankumar9892/"
                  src="github.svg"
                />
                <SocialLink
                  href="https://twitter.com/shravan9892"
                  src="twitter.svg"
                />
                <SocialLink
                  href="https://www.linkedin.com/in/shettyshravankumar/"
                  src="linkedin.svg"
                />
                <SocialLink
                  href="https://www.instagram.com/shetty.shravankumar/"
                  src="instagram.svg"
                />
                <SocialLink
                  href="https://medium.com/@shravankumarshetty9892"
                  src="medium.svg"
                />
              </S.FooterContainer>
            </Row>
          </Container>
        </S.Extra>
      </Fade>
    </Fragment>
  );
};

export default withTranslation()(Footer);
