import { createActionGroup, emptyProps, props } from "@ngrx/store";


export const globalActionsGroup = createActionGroup({
  source: "Global Actions",
  events:{
    "Login Success" : props<{userId: number}>(),
    "Logout" : emptyProps()
  }
});
