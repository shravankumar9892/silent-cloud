import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";
import { openPopupWidget } from "react-calendly";

import * as S from "./styles";

import { CalendlyButton } from "../../common/Button";

const MiddleBlock = ({ title, content, button, t }) => {
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
    <S.MiddleBlock>
      <Row type="flex" justify="center" align="middle">
        <Fade bottom>
          <S.ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6>{t(title)}</h6>
              <S.Content>{t(content)}</S.Content>
              {button ? (
                <CalendlyButton
                  onClick={() => openPopupWidget({ url, prefill, pageSettings, utm })}
                >
                  {t(button)}
                </CalendlyButton>
              ) : (
                ""
              )}
            </Col>
          </S.ContentWrapper>
        </Fade>
      </Row>
    </S.MiddleBlock>
  );
};

export default withTranslation()(MiddleBlock);
