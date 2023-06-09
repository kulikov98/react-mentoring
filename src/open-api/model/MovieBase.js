/**
 * Preference public API
 * Preference public API
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The MovieBase model module.
 * @module model/MovieBase
 * @version 0.1.0
 */
class MovieBase {
    /**
     * Constructs a new <code>MovieBase</code>.
     * @alias module:model/MovieBase
     * @param title {String} Movie title
     * @param posterPath {String} Url to the poster image
     * @param overview {String} Short description of the movie
     * @param runtime {Number} Movie duration time
     * @param genres {Array.<String>} List of genres
     */
    constructor(title, posterPath, overview, runtime, genres) { 
        
        MovieBase.initialize(this, title, posterPath, overview, runtime, genres);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, title, posterPath, overview, runtime, genres) { 
        obj['title'] = title;
        obj['poster_path'] = posterPath;
        obj['overview'] = overview;
        obj['runtime'] = runtime;
        obj['genres'] = genres;
    }

    /**
     * Constructs a <code>MovieBase</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MovieBase} obj Optional instance to populate.
     * @return {module:model/MovieBase} The populated <code>MovieBase</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MovieBase();

            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('tagline')) {
                obj['tagline'] = ApiClient.convertToType(data['tagline'], 'String');
            }
            if (data.hasOwnProperty('vote_average')) {
                obj['vote_average'] = ApiClient.convertToType(data['vote_average'], 'Number');
            }
            if (data.hasOwnProperty('vote_count')) {
                obj['vote_count'] = ApiClient.convertToType(data['vote_count'], 'Number');
            }
            if (data.hasOwnProperty('release_date')) {
                obj['release_date'] = ApiClient.convertToType(data['release_date'], 'String');
            }
            if (data.hasOwnProperty('poster_path')) {
                obj['poster_path'] = ApiClient.convertToType(data['poster_path'], 'String');
            }
            if (data.hasOwnProperty('overview')) {
                obj['overview'] = ApiClient.convertToType(data['overview'], 'String');
            }
            if (data.hasOwnProperty('budget')) {
                obj['budget'] = ApiClient.convertToType(data['budget'], 'Number');
            }
            if (data.hasOwnProperty('revenue')) {
                obj['revenue'] = ApiClient.convertToType(data['revenue'], 'Number');
            }
            if (data.hasOwnProperty('runtime')) {
                obj['runtime'] = ApiClient.convertToType(data['runtime'], 'Number');
            }
            if (data.hasOwnProperty('genres')) {
                obj['genres'] = ApiClient.convertToType(data['genres'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>MovieBase</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MovieBase</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of MovieBase.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }
        // ensure the json data is a string
        if (data['tagline'] && !(typeof data['tagline'] === 'string' || data['tagline'] instanceof String)) {
            throw new Error("Expected the field `tagline` to be a primitive type in the JSON string but got " + data['tagline']);
        }
        // ensure the json data is a string
        if (data['release_date'] && !(typeof data['release_date'] === 'string' || data['release_date'] instanceof String)) {
            throw new Error("Expected the field `release_date` to be a primitive type in the JSON string but got " + data['release_date']);
        }
        // ensure the json data is a string
        if (data['poster_path'] && !(typeof data['poster_path'] === 'string' || data['poster_path'] instanceof String)) {
            throw new Error("Expected the field `poster_path` to be a primitive type in the JSON string but got " + data['poster_path']);
        }
        // ensure the json data is a string
        if (data['overview'] && !(typeof data['overview'] === 'string' || data['overview'] instanceof String)) {
            throw new Error("Expected the field `overview` to be a primitive type in the JSON string but got " + data['overview']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['genres'])) {
            throw new Error("Expected the field `genres` to be an array in the JSON data but got " + data['genres']);
        }

        return true;
    }


}

MovieBase.RequiredProperties = ["title", "poster_path", "overview", "runtime", "genres"];

/**
 * Movie title
 * @member {String} title
 */
MovieBase.prototype['title'] = undefined;

/**
 * Movie tagline
 * @member {String} tagline
 */
MovieBase.prototype['tagline'] = undefined;

/**
 * Movie average raiting
 * @member {Number} vote_average
 */
MovieBase.prototype['vote_average'] = undefined;

/**
 * Total count of votes for the movie
 * @member {Number} vote_count
 */
MovieBase.prototype['vote_count'] = undefined;

/**
 * Movie release date
 * @member {String} release_date
 */
MovieBase.prototype['release_date'] = undefined;

/**
 * Url to the poster image
 * @member {String} poster_path
 */
MovieBase.prototype['poster_path'] = undefined;

/**
 * Short description of the movie
 * @member {String} overview
 */
MovieBase.prototype['overview'] = undefined;

/**
 * Movie production budget
 * @member {Number} budget
 */
MovieBase.prototype['budget'] = undefined;

/**
 * Movie revenue
 * @member {Number} revenue
 */
MovieBase.prototype['revenue'] = undefined;

/**
 * Movie duration time
 * @member {Number} runtime
 */
MovieBase.prototype['runtime'] = undefined;

/**
 * List of genres
 * @member {Array.<String>} genres
 */
MovieBase.prototype['genres'] = undefined;






export default MovieBase;

