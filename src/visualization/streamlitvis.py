# -*- coding: utf-8 -*-
import click
import logging
from pathlib import Path
from dotenv import find_dotenv, load_dotenv

import numpy as np
import pandas as pd

import streamlit as st
#https://streamlit.io/docs/api.html

# text ===== 
# st.title
# st.header
# st.subheader
# st.text
# st.markdown
# streamlit.code(body, language='python') 
# #Display a code block with optional syntax highlighting.

# streamlit.echo() # display code + results like in notebook

# displays ===== 
# streamlit.dataframe(data=None, width=None, height=None)
# st.dataframe(df.style.highlight_max(axis=0))
# If ‘data’ is a pandas.Styler, it will be used to style its underyling DataFrame.

# streamlit.table(data=None) # Display a static table.
# streamlit.json(body) # Display object or string as a pretty-printed JSON string.

# charts ===== 
# for all plots and diff charts refer to: https://streamlit.io/docs/api.html

# widgets ===== 
# streamlit.button(label) # Returns:	If the button was clicked on the last run of the app.
# streamlit.checkbox(label, value=False)
# streamlit.radio(label, options, index=0, format_func=<class 'str'>)
# streamlit.selectbox(label, options, index=0, format_func=<class 'str'>)
# streamlit.multiselect(label, options, default=None, format_func=<class 'str'>)
# streamlit.slider(label, min_value=None, max_value=None, value=None, step=None, format=None)
# streamlit.text_input(label, value='')
# streamlit.text_area(label, value='')
# streamlit.date_input(label, value=None) # Return type: datetime.date
# streamlit.time_input(label, value=None)

# streamlit.progress(value)
# streamlit.spinner(text='In progress...')
# streamlit.balloons()

# for more errors, visit api page
# streamlit.error(body)

# streamlit.empty() # placeholder
# streamlit.help(obj)
# streamlit.get_option(key)

# streamlit.cache(func=None, persist=False, ignore_hash=False, show_spinner=True, suppress_st_warning=False)
# @st.cache # <-- decorator for functions 

def main():
    pass

# to run script type in command line: streamlit run your_script.py

# view docs
# streamlit docs