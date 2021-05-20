import { useState, Fragment, lazy } from "react";
import { Row, Col, Drawer } from "antd";
import { CSSTransition } from "react-transition-group";
import { withTranslation } from "react-i18next";
import { openPopupWidget } from "react-calendly";

import * as S from "./styles";

const SvgIcon = lazy(() => import("../../common/SvgIcon"));
const CalendlyButton = lazy(() => import("../../common/Button"));

const Header = ({ t }) => {
  const [isNavVisible] = useState(false);
  const [isSmallScreen] = useState(false);
  const [visible, setVisibility] = useState(false);

  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {
    const scrollTo = (id) => {
      const element = document.getElementById(id);
      element.scrollIntoView({
        behavior: "smooth",
      });
      setVisibility(false);
    };

    const url = "https://calendly.com/silentcloudpartners";
    const pageSettings = {
      "backgroundColor": "ffffff",
      "hideEventTypeDetails": false,
      "hideLandingPageDetails": false,
      "primaryColor": "00a2ff",
      "textColor": "4d5055"
    }
    const utm = {
      "utmCampaign": "Spring Sale 2019",
      "utmSource": "Facebook",
      "utmMedium": "Ad",
      "utmContent": "Shoe and Shirts",
      "utmTerm": "Spring"
    }
    const prefill = {
      "name": "Jon Snow",
      "firstName": "Jon",
      "lastName": "Snow",
      "email": "test@test.com",
      "guests": [
        "janedoe@example.com",
        "johndoe@example.com"
      ],
      "customAnswers": {
        "a1": "a1",
        "a2": "a2",
        "a3": "a3",
        "a4": "a4",
        "a5": "a5",
        "a6": "a6",
        "a7": "a7",
        "a8": "a8",
        "a9": "a9",
        "a10": "a10"
      }
    }
    return (
      <Fragment>
        <S.CustomNavLinkSmall onClick={() => scrollTo("about")}>
          <S.Span>{t("About")}</S.Span>
        </S.CustomNavLinkSmall>
        <S.CustomNavLinkSmall onClick={() => scrollTo("services")}>
          <S.Span>{t("Services")}</S.Span>
        </S.CustomNavLinkSmall>
        <S.CustomNavLinkSmall onClick={() => scrollTo("product")}>
          <S.Span>{t("Free 15min Consultation")}</S.Span>
        </S.CustomNavLinkSmall>
        <S.CustomNavLinkSmall
          style={{ width: "180px" }}
          onClick={() => openPopupWidget({ url, prefill, pageSettings, utm })}
        >
          <S.Span>
            <CalendlyButton>
              {t("Schedule a call")}
            </CalendlyButton>
          </S.Span>
        </S.CustomNavLinkSmall>
      </Fragment>
    );
  };

  return (
    <S.Header>
      <S.Container>
        <Row type="flex" justify="space-between" gutter={20}>
          <S.LogoContainer to="/" aria-label="homepage">
            <SvgIcon src="logo.svg" />
          </S.LogoContainer>
          <S.NotHidden>
            <MenuItem />
          </S.NotHidden>
          <S.Burger onClick={showDrawer}>
            <S.Outline />
          </S.Burger>
        </Row>
        <CSSTransition
          in={!isSmallScreen || isNavVisible}
          timeout={350}
          classNames="NavAnimation"
          unmountOnExit
        >
          <Drawer closable={false} visible={visible} onClose={onClose}>
            <Col style={{ marginBottom: "2.5rem" }}>
              <S.Label onClick={onClose}>
                <Col span={12}>
                  <S.Menu>Menu</S.Menu>
                </Col>
                <Col span={12}>
                  <S.Outline padding="true" />
                </Col>
              </S.Label>
            </Col>
            <MenuItem />
          </Drawer>
        </CSSTransition>
      </S.Container>
    </S.Header>
  );
};

export default withTranslation()(Header);
