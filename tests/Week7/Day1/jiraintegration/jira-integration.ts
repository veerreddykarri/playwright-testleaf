import axios from "axios";

const projectKey = "PP";
const username = "veerreddykarri@gmail.com";
const apiToken = "ATATT3xFfGF0GlfngDQPlJ9E0rdNfAFJ4Aev79bQzxy3BBuLlbLBwszlukQJUN1HNOxAW7hU4IEQGYSbc7aoh8Sw3JMPtdLRHsn6MeSf6LfPloy6ZQDYHH7W5HCi7H7SMjw5k8Vz67L0TToIxDFOLCEiaXspdbWnwtuCdjCZN8Z_PsdDYlZF04A=E2E1AE29";
const endpoint = "https://veerreddykarri.atlassian.net/rest/api/3/issue";

export async function createJiraIssue(
  summary: string,
  descriptionText: string
) {

  const issueRequestJson = {
    fields: {
      project: { key: projectKey },
      summary,
      issuetype: { name: "Bug" },

      // ✅ Proper ADF with code block
      description: {
        type: "doc",
        version: 1,
        content: [
          {
            type: "paragraph",
            content: [
              {
                type: "text",
                text: "Playwright Failure Details:",
                marks: [{ type: "strong" }],
              },
            ],
          },
          {
            type: "codeBlock",
            attrs: {
              language: "text",
            },
            content: [
              {
                type: "text",
                text: descriptionText,
              },
            ],
          },
        ],
      },
    },
  };

  try {
    const response = await axios.post(endpoint, issueRequestJson, {
      auth: {
        username,
        password: apiToken,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("✅ Jira issue created:", response.data.key);
    return response.data.key;

  } catch (error: any) {
    console.error("❌ Failed to create Jira issue");
    console.error(error.response?.data || error.message);
    throw error;
  }
}
