export const updatePageHeading = (pageHeading) => {
  // debugger;
  return {
    type: 'UPDATE_PAGE_HEADING',
    payload: {
      pageHeading
    }
  }
}

