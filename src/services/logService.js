import * as Sentry from "@sentry/react";

function init() {}

function log(error) {
  console.error(error);
}
export default {
  init,
  log,
};
