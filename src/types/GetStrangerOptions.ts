export interface GetStrangerOptions {
  _id: number
  aliases: string[]
  otherRelations: string[]
  affiliation: string[]
  occupation: string[]
  residence: string[]
  appearsInEpisodes: string[]
  photo?: string
  name?: string
  status?: string
  gender?: string
  eyeColor?: string
  portrayedBy?: string
  born?: string
  hairColor?: string
}