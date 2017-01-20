# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170120015328) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "albums", force: :cascade do |t|
    t.string   "title",                                                                                                                        null: false
    t.integer  "artist_id",                                                                                                                    null: false
    t.string   "image_url",   default: "http://res.cloudinary.com/davidhu2000/image/upload/c_scale,w_500/v1484334953/album_default_image.jpg", null: false
    t.text     "description"
    t.datetime "created_at",                                                                                                                   null: false
    t.datetime "updated_at",                                                                                                                   null: false
  end

  create_table "artists", force: :cascade do |t|
    t.string   "name",                                                                                                                                   null: false
    t.string   "image_url",  default: "http://res.cloudinary.com/davidhu2000/image/upload/c_crop,h_290,w_290,x_85/v1484335512/default_artist_image.jpg", null: false
    t.datetime "created_at",                                                                                                                             null: false
    t.datetime "updated_at",                                                                                                                             null: false
  end

  create_table "playlist_follows", force: :cascade do |t|
    t.integer  "user_id",     null: false
    t.integer  "playlist_id", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "playlist_follows", ["user_id", "playlist_id"], name: "index_playlist_follows_on_user_id_and_playlist_id", unique: true, using: :btree

  create_table "playlist_songs", force: :cascade do |t|
    t.integer  "song_id",     null: false
    t.integer  "playlist_id", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "playlists", force: :cascade do |t|
    t.integer  "user_id",                                                                                                           null: false
    t.string   "image_url",   default: "http://res.cloudinary.com/davidhu2000/image/upload/v1484612456/playlist_default_image.png"
    t.text     "description"
    t.datetime "created_at",                                                                                                        null: false
    t.datetime "updated_at",                                                                                                        null: false
    t.string   "title",       default: "Untitled"
  end

  create_table "songs", force: :cascade do |t|
    t.string   "title",      default: "Untitled", null: false
    t.integer  "album_id",                        null: false
    t.integer  "order"
    t.text     "lyrics"
    t.datetime "created_at",                      null: false
    t.datetime "updated_at",                      null: false
    t.string   "song_url",                        null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "email",           null: false
    t.string   "first_name"
    t.string   "last_name"
    t.string   "image_url"
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
