const FormChecker = {
    input: {
        default: {
            RANGE: {
                tips: '字符个数在两者之间',
                params: {
                    min: {
                        placeholder: '最小值',
                    },
                    max: {
                        placeholder: '最大值',
                    }
                },
                rule: function ({ min, max }, input) {
                    return (input.length >= min && input.length <= max);
                },
                fail: function ({ min, max }) {
                    return `请输${min}-${max}个字。`
                }
            },
            MAX: {
                tips: '字符个数不超过',
                params: {
                    max: {
                        placeholder: '最大值',
                    }
                },
                rule: function ({ max }, input) {
                    return (nput.length <= max)
                },
                fail: function ({ max }) {
                    return `请输不超过${max}个字。`
                }
            }
        },
        number: {
            DEFAULT: {
                rule: function (params, input) {
                    return /^[0-9]*$/.test(input);
                },
                fail: function () {
                    return '请输入数字。';
                }
            },
            RANGE: {
                tips: '数字值在两者之间',
                params: {
                    min: {
                        placeholder: '最小值',
                    },
                    max: {
                        placeholder: '最大值',
                    }
                },
                rule: function ({ min, max }, input) {
                    return (Number(input) >= min && Number(input) <= max);
                },
                fail: function ({ min, max }) {
                    return `请输${min}-${max}区间的数字。`
                }
            }
        }
    }
}

export default FormChecker