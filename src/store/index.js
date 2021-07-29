import {createStore}  from 'vuex';
import faq from './faq.module';
import glossary from './glossary.module';

export const store = createStore({
    modules: {
        faq,
        glossary
    }
  });