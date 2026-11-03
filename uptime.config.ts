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
      target: 'https://blog.zzemy.top/healthz',
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
      target: 'https://emmmxx.xyz/healthz',
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
    {
      id: 'newapi_zzemy_top',
      name: 'newapi.zzemy.top',
      method: 'GET',
      target: 'https://newapi.zzemy.top/healthz',
      tooltip: 'newapi.zzemy.top',
      statusPageLink: 'https://newapi.zzemy.top/',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
    {
      id: 'cpa_zzemy_top',
      name: 'cpa.zzemy.top',
      method: 'GET',
      target: 'https://cpa.zzemy.top/healthz',
      tooltip: 'cpa.zzemy.top',
      statusPageLink: 'https://cpa.zzemy.top/',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
    {
      id: 'sub_zzemy_top',
      name: 'sub.zzemy.top',
      method: 'GET',
      target: 'https://sub.zzemy.top/',
      tooltip: 'sub.zzemy.top',
      statusPageLink: 'https://sub.zzemy.top/',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
    {
      id: 'people_sast_fun',
      name: 'people.sast.fun',
      method: 'GET',
      target: 'https://people.sast.fun/health',
      tooltip: 'people.sast.fun',
      statusPageLink: 'https://people.sast.fun/',
      expectedCodes: [200],
      timeout: 10000,
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
