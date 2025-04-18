
import React from 'react';

interface ScriptProps {
  type: string;
  children: string;
}

const Script: React.FC<ScriptProps> = ({ type, children }) => {
  return (
    <script 
      type={type} 
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
};

export default Script;
