
export function changeVisibility(criteria1, criteria2) {
    return {
      type: "DISPLAY_INTRO",
      doneAction1: criteria1,
      doneAction2: criteria2      
    }
  }

  export function fetchData(criteria) {
    return {
      type: "INJECT_FETCHED_DATA",
      doneAction: criteria,
     
    }
  }

  export function whatCaseWasClicked(criteria) {
    return {
      type: "INJECT_CASE",
      doneAction: criteria,
     
    }
  }

  export function changeBoolean(criteria) {
    return {
      type: "CHANGE_BOOLEAN",
      doneAction: criteria,
     
    }
  }

  export function showBubbleCreator(criteria) {
    return {
      type: "CHANGE_BOOBLE_VISIBILITY",
      doneAction: criteria,
     
    }
  }

  export function changeFetchEndpoint(criteria) {
    return {
      type: "CHANGE_ENDPOINT",
      doneAction: criteria,
     
    }
  }


