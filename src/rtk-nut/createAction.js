export default function createAction(type) {
  function actionCreator(...args) {
    return {type, payload: args[0]};
  }

  actionCreator.type = type;
  return actionCreator;
}
