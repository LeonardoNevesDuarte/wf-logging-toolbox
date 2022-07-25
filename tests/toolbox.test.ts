//import 'jest'
import { wfLoggingToolbox } from '../src/index'

const logger = new wfLoggingToolbox(null)

test(`Log out put can't be null`, () => {
  expect(
    logger.info('This is a test message', 'USER_1')
  ).not.toBeNull();
});