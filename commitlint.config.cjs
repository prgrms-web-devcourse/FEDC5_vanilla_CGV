module.exports = {
    extends: ["@commitlint/config-conventional"],
    rules: {
        "subject-case": [0], // 커밋 메시지 자체에는 린트 규칙 필요 없음
    },
};
