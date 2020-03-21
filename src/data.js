export const data = [
  {
    id: "000123",
    title: "What paint do you want to use?",
    description: "Lorem ipsum conseculor dolit",
    helper: {
      title: "string",
      content: "string"
    },
    type: "radio",
    data: {
      options: [
        {
          label: "1",
          icon: "string",
          value: "string",
          helper: {
            title: "string",
            content: "string"
          }
        },
        {
          label: "2",
          icon: "string",
          value: "string",
          helper: {
            title: "string",
            content: "string"
          }
        },
        {
          label: "3",
          icon: "string",
          value: "string",
          helper: {
            title: "string",
            content: "string"
          }
        },
        {
          label: "4",
          icon: "string",
          value: "string",
          helper: {
            title: "string",
            content: "string"
          }
        }
      ]
    },
    requires: [
      {
        questionId: "string",
        value: "string"
      }
    ]
  },
  {
    id: "111000",
    title: "Second Question?",
    description: "Bla bla bla",
    helper: {
      title: "string",
      content: "string"
    },
    type: "input",
    data: {
      fields: [
        {
          label: "This is a input field",
          icon: "string",
          name: "string",
          helper: {
            title: "string",
            content: "string"
          }
        }
      ]
    },
    requires: [
      {
        questionId: "000123",
        value: "string"
      }
    ]
  }
];
