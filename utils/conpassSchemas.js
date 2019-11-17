module.exports = {
  connpass: `
      results_returned: Int
      results_available: Int
      results_start: Int
      events: [events]
    `,
  events: `
      event_id: Int
      title: String
      catch: String
      description: String
      event_url: String
      hash_tag: String
      started_at: String
      ended_at: String
      limit: Int
      event_type: String
      series: [series]
      address: String
      place: String
      lat: Float
      lon: Float
      owner_id: Int
      owner_nickname: String
      owner_display_name: String
      accepted: Int
      waiting: Int
      updated_at: String
    `,
  series: `
      id: Int
      title: String
      url: String
    `,
}
