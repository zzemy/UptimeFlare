// This is a simplified example config file for quickstart
// Some not frequently used features are omitted/commented out here
// For a full-featured example, please refer to `uptime.config.full.ts`

// Don't edit this line
import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  // Title for your status page
  title: "emmm's Status Page",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://github.com/zzemy', label: 'GitHub' },
    { link: 'https://blog.zzemy.top/', label: 'Blog' },
    { link: 'mailto:1992107794@qq.com', label: 'Email Me', highlight: true },
  ],
  customFooter:
    '<p style="text-align: center; font-size: 12px; margin-top: 10px;">© 2026 ZZEMY. Status powered by <a href="https://github.com/lyc8503/UptimeFlare" target="_blank">UptimeFlare</a>.</p>',
}

const workerConfig: WorkerConfig = {
  // Define all your monitors here
  monitors: [
    {
      // `id` should be unique, history will be kept if the `id` remains constant
      id: 'blog_zzemy_top',
      // `name` is used at status page and callback message
      name: 'blog.zzemy.top',
      // `method` should be a valid HTTP Method
      method: 'GET',
      // `target` is a valid URL
      target: 'https://blog.zzemy.top',
      // [OPTIONAL] `tooltip` is ONLY used at status page to show a tooltip
      tooltip: 'blog.zzemy.top',
      // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
      statusPageLink: 'https://blog.zzemy.top/',
      // [OPTIONAL] `expectedCodes` is an array of acceptable HTTP response codes, if not specified, default to 2xx
      expectedCodes: [200],
      // [OPTIONAL] `timeout` in millisecond, if not specified, default to 10000
      timeout: 10000,
      // [OPTIONAL] headers to be sent
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
    {
      // `id` should be unique, history will be kept if the `id` remains constant
      id: 'emmmxx_xyz',
      // `name` is used at status page and callback message
      name: 'emmmxx.xyz',
      // `method` should be a valid HTTP Method
      method: 'GET',
      // `target` is a valid URL
      target: 'https://emmmxx.xyz',
      // [OPTIONAL] `tooltip` is ONLY used at status page to show a tooltip
      tooltip: 'emmmxx.xyz',
      // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
      statusPageLink: 'https://emmmxx.xyz/',
      // [OPTIONAL] `expectedCodes` is an array of acceptable HTTP response codes, if not specified, default to 2xx
      expectedCodes: [200],
      // [OPTIONAL] `timeout` in millisecond, if not specified, default to 10000
      timeout: 10000,
      // [OPTIONAL] headers to be sent
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
    {
      // `id` should be unique, history will be kept if the `id` remains constant
      id: 'zzemy_top',
      // `name` is used at status page and callback message
      name: 'zzemy.top',
      // `method` should be a valid HTTP Method
      method: 'GET',
      // `target` is a valid URL
      target: 'https://zzemy.top',
      // [OPTIONAL] `tooltip` is ONLY used at status page to show a tooltip
      tooltip: 'zzemy.top',
      // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
      statusPageLink: 'https://zzemy.top/',
      // [OPTIONAL] `expectedCodes` is an array of acceptable HTTP response codes, if not specified, default to 2xx
      expectedCodes: [200],
      // [OPTIONAL] `timeout` in millisecond, if not specified, default to 10000
      timeout: 10000,
      // [OPTIONAL] headers to be sent
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
  ],
}

// You can define multiple maintenances here
// During maintenance, an alert will be shown at status page
// Also, related downtime notifications will be skipped (if any)
// Of course, you can leave it empty if you don't need this feature

// const maintenances: MaintenanceConfig[] = []

const maintenances: MaintenanceConfig[] = []

// Don't edit this line
export { maintenances, pageConfig, workerConfig }
