import React from 'react';
import { generatePersonSchema } from '../utils/seo';

export const JsonLd: React.FC = () => {
  const schema = generatePersonSchema();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
