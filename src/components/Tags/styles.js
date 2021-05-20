import styled from 'styled-components';

const styles = {
  "fontSize": "xxx-large", "lineHeight": "90px", "margin": "20px", "paddingRight": "14px", "paddingLeft": "14px", "borderRadius": "12px"
}

export default styles;

export const TagsCustomStyles = styled.div`

  .ant-tag {
	font-size: large;
	line-height: 90px;
	margin: 20px;
	padding-right: 14px; 
	padding-left: 14px;
	border-radius: 12px;
  }

  .ant-tag:hover {
  	cursor: pointer;
  }
`;