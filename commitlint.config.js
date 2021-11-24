/*
 * @Author: Comer
 * @Mail: xinlai@bosssoft.com.cn
 * @Date: 2021-11-24 16:47:49
 * @LastEditors: Comer
 * @LastEditTime: 2021-11-24 17:24:19
 * @Description:
 */
module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [2, "always", ["feat", "fix", "docs", "style", "refactor", "test", "chore", "revert"]],
    "subject-full-stop": [0, "never"],
    "subject-case": [0, "never"]
  }
};