"use strict";
exports.__esModule = true;
exports.StepWrapper = void 0;
exports.StepWrapper = function () {
    return (React.createElement("div", { className: "steps-container" },
        React.createElement("div", { className: "steps-wrapper" },
            React.createElement("div", { className: "steps-progressbar" },
                React.createElement("div", { className: "stepper-wrapper" },
                    React.createElement("div", { className: "stepper-item completed" },
                        React.createElement("div", { className: "step-counter" }, "1"),
                        React.createElement("div", { className: "step-name" }, "First")),
                    React.createElement("div", { className: "stepper-item active" },
                        React.createElement("div", { className: "step-counter" }, "2"),
                        React.createElement("div", { className: "step-name" }, "Second")),
                    React.createElement("div", { className: "stepper-item" },
                        React.createElement("div", { className: "step-counter" }, "3"),
                        React.createElement("div", { className: "step-name" }, "Third")))),
            React.createElement("div", { className: "steps-content" }))));
};
