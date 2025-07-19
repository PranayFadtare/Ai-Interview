/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:npg_Zm3NGleMj5nc@ep-gentle-wave-afkp2nl8-pooler.c-2.us-west-2.aws.neon.tech/ai-interview-mocker?sslmode=require&channel_binding=require',
    }
  };