// Copyright 2018 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {Injectable} from '@angular/core';
import {tap} from 'rxjs/operators';

import {CreateTagRequest} from '../models/tag';

import {ApiService} from './api';


/** A tag service that manages API calls to the backend. */
@Injectable()
export class TagService extends ApiService {
  /** Implements ApiService's apiEndpoint requirement. */
  apiEndpoint = 'tag';

  create(tagParams: CreateTagRequest) {
    return this.post('create', tagParams).pipe(tap(() => {
      this.snackBar.open(`Tag ${tagParams.tag.name} created.`);
    }));
  }
}