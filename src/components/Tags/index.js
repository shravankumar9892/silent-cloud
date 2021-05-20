import { Tag } from 'antd';

import styles, { TagsCustomStyles } from "./styles";

const TagsCustom = ({ t, id }) => {

  return (
      <TagsCustomStyles id={id}>
        <Tag color="magenta">Python Scripting</Tag>
        <Tag color="red">Content Writing</Tag>
        <Tag color="volcano">Angular</Tag>
        <Tag color="orange">Content Creation</Tag>
        <Tag color="gold">Flask/Django</Tag>
        <Tag color="lime">SEO</Tag>
        <Tag color="green">NodeJS</Tag>
        <Tag color="cyan">Copywriting</Tag>
        <Tag color="blue">Ionic Mobile</Tag>
        <Tag color="geekblue">Video Scripting</Tag>
        <Tag color="purple">Debugging</Tag>
      </TagsCustomStyles>
  );
};

export default TagsCustom;
