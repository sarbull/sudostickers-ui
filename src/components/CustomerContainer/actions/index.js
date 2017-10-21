export const UPDATE_FIELD='UPDATE_FIELD';
export function updateField(field) {
  return {
    type: UPDATE_FIELD,
    field
  };
}